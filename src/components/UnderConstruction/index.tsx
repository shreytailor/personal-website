import classes from './UnderConstruction.module.css';

function getRandomEmoji(): string {
  const EMOJIS = [
    '🥰',
    '😍',
    '🥸',
    '😎',
    '🥳',
    '🤥',
    '🤠',
    '👻',
    '🐶',
    '🦊',
    '🐸',
    '🦁',
    '🐧',
    '🙉',
    '🐣',
    '🐝',
    '🐛',
    '🐌',
    '🪲',
    '🦎',
    '🐠',
    '🐙',
    '🐊',
    '🦭',
    '🐳',
    '🦚',
    '🦩',
    '🦜',
    '🦫',
    '🦥',
    '🦦',
  ];

  let randomIndex = Math.floor(Math.random() * EMOJIS.length);
  return EMOJIS[randomIndex];
}

export function UnderConstruction() {
  return (
    <div className={classes.container}>
      <img
        className={classes.gif}
        src="https://media.tenor.com/v7Z6_aeZ1ocAAAAC/patrick-star-idk.gif"
      />
      <p>
        This page is under construction - stay tuned for some awesome updates!{' '}
      </p>
      <p>{getRandomEmoji()}</p>
    </div>
  );
}
