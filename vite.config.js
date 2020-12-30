import { configureable, getIcons } from '@baleada/prepare'

const icons = getIcons({
  set: 'Heroicons',
  dirs: ['solid', 'outline'],
  basePath: 'git_modules/heroicons/src',
  toSnakeCased: ({ name, dir }) => `${name}${dir === 'outline' ? '-outline' : ''}`,
})

export default configureable('vite')
  .alias({
    '/@src/': `/src`,
  })
  .koa(configureable => 
    configureable
      .virtual.iconComponentIndex({ icons })
      .virtual.iconComponents({ icons })
      .configure()
  )
  .configure()
