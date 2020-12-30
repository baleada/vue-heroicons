import { getIcons } from '@baleada/prepare'

const icons = getIcons({
  set: 'Heroicons',
  dirs: ['solid', 'outline'],
  basePath: 'git_modules/heroicons/src',
  toSnakeCased: ({ name, dir }) => `${name}${dir === 'outline' ? '-outline' : ''}`,
})
