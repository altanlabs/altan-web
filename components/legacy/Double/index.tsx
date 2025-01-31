'use client';
import styles from './style.module.scss';
import { useRef } from 'react';

export default function Index({ projects, reversed = false }) {
    const firstImage = useRef<HTMLDivElement>(null);
    const secondImage = useRef<HTMLDivElement>(null);
    let requestAnimationFrameId: number | null = null;
    let xPercent = reversed ? 100 : 0;
    let currentXPercent = reversed ? 100 : 0;
    const speed = 0.15;

    const manageMouseMove = (e) => {
        const { clientX } = e;
        xPercent = (clientX / window.innerWidth) * 100;

        if (!requestAnimationFrameId) {
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    const animate = () => {
        const xPercentDelta = xPercent - currentXPercent;
        currentXPercent += xPercentDelta * speed;

        const firstImagePercent = 66.66 - (currentXPercent * 0.33);
        const secondImagePercent = 33.33 + (currentXPercent * 0.33);

        if (firstImage.current && secondImage.current) {
            firstImage.current.style.width = `${firstImagePercent}%`;
            secondImage.current.style.width = `${secondImagePercent}%`;
        }

        if (Math.round(xPercent) === Math.round(currentXPercent)) {
            if (requestAnimationFrameId !== null) {
                window.cancelAnimationFrame(requestAnimationFrameId);
                requestAnimationFrameId = null;
            }
        } else {
            requestAnimationFrameId = window.requestAnimationFrame(animate);
        }
    }

    return (
        <div onMouseMove={(e) => { manageMouseMove(e) }} className={styles.double}>
            <div ref={firstImage} className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <video preload="none" autoPlay muted loop className="rounded-md">
                        <source src={projects[0].src} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.body}>
                    <h3>{projects[0].name}</h3>
                    <p>{projects[0].description}</p>
                    <p>{projects[0].year}</p>
                </div>
            </div>

            <div ref={secondImage} className={styles.imageContainer}>
                <div className={styles.stretchyWrapper}>
                    <video preload="none" autoPlay muted loop className="rounded-md">
                        <source src={projects[1].src} type="video/webm" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className={styles.body}>
                    <h3>{projects[1].name}</h3>
                    <p>{projects[1].description}</p>
                    <p>{projects[1].year}</p>
                </div>
            </div>

        </div>
    )
}