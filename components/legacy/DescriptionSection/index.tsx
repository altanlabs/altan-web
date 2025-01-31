"use client";
import styles from './styles.module.scss'
import { useRef, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';


const DescriptionSection = ({ description }: { description: string }) => {
  let refs = useRef<Element[]>([]);
  const body = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, [])

  const createAnimation = () => {
    gsap.to(refs.current, {
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 1.1}`,
      },
      opacity: 1,
      ease: "none",
      stagger: 0.2
    })
  }

  const splitWords = (description: string) => {
    let body: JSX.Element[] = [];
    description.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>)
    });
    return body;
  }

  const splitLetters = (word: string) => {
    let letters: JSX.Element[] = [];
    word.split("").forEach((letter, i) => {
      letters.push(<span key={letter + "_" + i} ref={el => { if (el) refs.current.push(el) }}>{letter}</span>);
    });
    return letters;
  };

  return (
    <>
      <section className="py-10 lg:py-15 xl:py-10">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <div className="flex lg:items-center">
            <div className="md:w">
              <div ref={body} className={styles.body}>
                {
                  splitWords(description)
                }
              </div>

              {/* <TextGenerateEffect
                className="text-3xl font-bold  xl:text-sectiontitle2"
                words={description || ""} /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DescriptionSection;

