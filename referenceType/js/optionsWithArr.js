let styles = ["Джаз", "блюз"];

styles.push("Рок-н-ролл");
styles[Math.floor(styles.length / 2)] = "Классика";
styles.shift(1)
styles.unshift('Рэп', 'Регги')
console.log(styles)