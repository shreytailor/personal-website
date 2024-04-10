import styles from './ImageCarousel.module.css';
import Flicking, { ViewportSlot } from '@egjs/react-flicking';
import { AutoPlay } from '@egjs/flicking-plugins';
import '@egjs/react-flicking/dist/flicking.css';
import '@egjs/flicking-plugins/dist/flicking-plugins.css';

interface ImageCarouselProps {
  images: string[];
}

// export default function ImageCarousel() {
//   return (
//     <img
//       className={styles.image}
//       src="https://res.cloudinary.com/dsbddty2d/image/upload/v1712457871/personal_website/STA07176_dbebor.jpg"
//     />
//   );
// }

export default function ImageCarousel() {
  const plugins = [
    new AutoPlay({ duration: 4000, direction: 'NEXT', stopOnHover: true }),
  ];

  return (
    <Flicking
      align="prev"
      bound={true}
      moveType="snap"
      interruptable={false}
      preventDefaultOnDrag={true}
      renderOnlyVisible={true}
      circular={true}
      style={{
        height: '100%',
        maxWidth: '1440px',
        margin: 'auto',
        width: '100%',
        zIndex: -1,
      }}
      plugins={plugins}
    >
      <img
        className={`${styles.image} panel`}
        src="https://images.unsplash.com/photo-1712337646541-d0c6f85447f8?q=80&w=4140&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <img
        className={`${styles.image} panel`}
        src="https://images.unsplash.com/photo-1712222243447-6838646ceba2?q=80&w=4000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <img
        className={`${styles.image} panel`}
        src="https://plus.unsplash.com/premium_photo-1697729958605-b27137644fbf?q=80&w=4142&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
    </Flicking>
  );
}
