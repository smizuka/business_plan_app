import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

// Propsの型定義
interface ZoomAndDraggableImageProps {
  src: string;
  alt: string;
}

// ImageStateの型定義
interface ImageState {
  scale: number;
  offsetX: number;
  offsetY: number;
}

interface Position {
    x: number;
    y: number;
}

const ZoomAndDraggableImage: React.FC<ZoomAndDraggableImageProps> = ({ src, alt }) => {
    // 画像のサイズと位置を管理するための状態（型付き）
    const [imageState, setImageState] = useState<ImageState>({
        scale: 1,
        offsetX: 0,
        offsetY: 0,
    });

    const containerRef = useRef<HTMLDivElement>(null); // コンテナへの参照を保持

    // divタグの中心位置を算出するコード
    const [containerCenter, setContainerCenter] = useState<Position>({ x: 0, y: 0 });

    // ドラッグ操作を管理するための状態（型付き）
    const [dragging, setDragging] = useState<boolean>(false);
    const [startPosition, setStartPosition] = useState<Position>({ x: 0, y: 0 });

    // コンポーネントのマウント時に実行
    useEffect(() => {
        if (containerRef.current) {
          const { offsetWidth, offsetHeight } = containerRef.current;
          setContainerCenter({
            x: offsetWidth / 2,
            y: offsetHeight / 2,
          });
        }
      }, []);

    const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();// ブラウザのデフォルトのドラッグ動作を無効化
        setDragging(true);
        setStartPosition({
            x: e.clientX - imageState.offsetX,
            y: e.clientY - imageState.offsetY,
        })
    };

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!dragging) return;
        setImageState({
            ...imageState,
            offsetX: e.clientX - startPosition.x,
            offsetY: e.clientY - startPosition.y,
        })
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
        e.preventDefault(); // ブラウザのデフォルトのドラッグ動作を無効化
        setDragging(true);
        // タッチの位置を取得
        const touch = e.touches[0];
        setStartPosition({
            x: touch.clientX - imageState.offsetX,
            y: touch.clientY - imageState.offsetY,
        });
    };

    const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
        if (!dragging) return;
        // タッチの位置を取得
        e.preventDefault();// ブラウザのデフォルトのスクロールを無効化
        const touch = e.touches[0];
        setImageState({
            ...imageState,
            offsetX: touch.clientX - startPosition.x,
            offsetY: touch.clientY - startPosition.y,
        });
    };

    // タッチ終了またはキャンセル時の処理
    const handleTouchEndOrCancel = () => {
        setDragging(false);
    };

    const resetPostion = () => {
        setImageState(prevState => {
            return { ...prevState, offsetX: 0, offsetY: 0 };
        });
    }

    const zoom = (isZoomIn: boolean) => {
        const factor = isZoomIn ? 1.1 : 0.9;
        setImageState(prevState => {
            const newScale = prevState.scale * factor;
            const diffScale = newScale - prevState.scale;
            const newOffsetX = prevState.offsetX - ((containerCenter.x / 2 - prevState.offsetX) * diffScale) / prevState.scale;
            const newOffsetY = prevState.offsetY - ((containerCenter.y / 2 - prevState.offsetY) * diffScale) / prevState.scale;
            return { ...prevState, scale: newScale, offsetX: newOffsetX, offsetY: newOffsetY };
        });
    };

    return (
        <div
        className="overflow-hidden w-full h-[500px] flex items-center justify-center relative"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onMouseUp={handleMouseUp}
        onTouchMove={handleTouchMove}
        onTouchCancel={handleTouchEndOrCancel}
        >
        <div
            className="w-3/4 h-auto absolute mx-auto top-0 bottom-0"
            style={{
                cursor: dragging ? 'grabbing' : 'grab',
                transform: `translate(${imageState.offsetX}px, ${imageState.offsetY}px) scale(${imageState.scale})`,
                transformOrigin: 'center',
            }}
            onMouseDown={handleMouseDown}
            onTouchStart={handleTouchStart}
        >
            <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
            />
        </div>
        <div style={{ position: 'absolute', right: 0, bottom: 0, display: 'flex' }}>
            <button className="w-10 h-10 border border-orange-300 bg-orange-300 flex flex-col items-center justify-center mx-2 rounded-md shadow-lg" onClick={resetPostion}>
                <svg className="w-6 h-6 font-bold text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" d="M21 9H8a5 5 0 0 0 0 10h9m4-10-4-4m4 4-4 4"/>
                </svg>
            </button>
            <button className="w-10 h-10 border border-orange-300 bg-orange-300 flex flex-col items-center justify-center mx-2 rounded-md shadow-lg" onClick={() => zoom(true)}>
                <svg className="w-6 h-6 font-bold text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 12h14m-7 7V5"/>
                </svg>
            </button>
            <button className="w-10 h-10 border border-orange-300 bg-orange-300 flex flex-col items-center justify-center mx-2 rounded-md shadow-lg" onClick={() => zoom(false)}>
                <svg className="w-6 h-6 font-bold text-white dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5" d="M5 12h14"/>
                </svg>
            </button>
        </div>
        </div>
    );
}

export default ZoomAndDraggableImage;