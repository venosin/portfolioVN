export const gradients = {
  primary: 'bg-gradient-to-br from-light-200 via-accent/10 to-light-200 dark:from-dark-100 dark:via-accent/20 dark:to-dark-100',
  secondary: 'bg-gradient-to-br from-light-100 via-primary/10 to-light-100 dark:from-dark-200 dark:via-primary/20 dark:to-dark-200',
  glow: 'absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-accent/20 to-transparent',
};

export const transitions = {
  base: 'transition-all duration-300',
  transform: 'hover:scale-[1.02] active:scale-[0.98] hover:-translate-y-1',
  glow: 'after:absolute after:inset-0 after:z-0 after:opacity-0 after:transition-opacity hover:after:opacity-100 after:bg-gradient-to-t after:from-accent/20 after:to-transparent',
};

export const text = {
  gradient: 'bg-gradient-to-r from-accent via-primary to-secondary bg-clip-text text-transparent',
  heading: 'text-dark dark:text-light',
  body: 'text-dark-200 dark:text-light-300',
};

export const containers = {
  section: 'relative py-20 md:py-32',
  wrapper: 'container mx-auto px-4',
  sectionBg: 'absolute inset-0 bg-gradient-radial from-light-100/50 to-transparent dark:from-dark-200/50',
  card: 'relative p-6 rounded-xl bg-white/80 backdrop-blur-xl border border-light-200/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 dark:bg-dark-100/50 dark:border-dark-200/30',
};

export const buttons = {
  primary: `
    relative overflow-hidden
    px-6 py-3 rounded-lg
    font-medium
    bg-gradient-to-br from-light-200 via-light-100 to-light-200
    hover:from-light-100 hover:via-accent/10 hover:to-light-100
    dark:from-dark-100 dark:via-dark-200 dark:to-dark-100
    dark:hover:from-dark-200 dark:hover:via-accent/20 dark:hover:to-dark-200
    border border-light-200/50 hover:border-accent/50
    text-dark hover:text-dark-800 dark:text-light-300 dark:hover:text-light
    transition-all duration-300
    hover:shadow-lg hover:shadow-accent/20
    group
    hover:-translate-y-1
  `,
  secondary: `
    relative overflow-hidden
    px-6 py-3 rounded-lg
    font-medium
    bg-gradient-to-br from-light-100/80 via-light-200/80 to-light-100/80
    hover:from-light-200/90 hover:via-primary/10 hover:to-light-200/90
    dark:from-dark-200/80 dark:via-dark-100/80 dark:to-dark-200/80
    dark:hover:from-dark-100/90 dark:hover:via-primary/20 dark:hover:to-dark-100/90
    border border-light-200/30 hover:border-primary/50
    text-dark hover:text-dark-800 dark:text-light-300 dark:hover:text-light
    transition-all duration-300
    hover:shadow-lg hover:shadow-primary/20
    group
    hover:-translate-y-1
  `,
};
