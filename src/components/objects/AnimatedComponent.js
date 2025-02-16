import styles from '../../assets/scss/pages/Sobre.module.css'
import { useEffect, useRef } from 'react'

const AnimatedComponent = ({children}) =>{
    const elementRef = useRef(null);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            elementRef.current.classList.add(`${styles.show}`);
          } else {
            elementRef.current.classList.remove('animated');
          }
        });
      });
  
      if (elementRef.current) {
        observer.observe(elementRef.current);
      }
  
      return () => {
        if (elementRef.current) {
          observer.unobserve(elementRef.current);
        }
      };
    }, []); 
  
    return <div ref={elementRef}>{children}</div>;
}

export default AnimatedComponent