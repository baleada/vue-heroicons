import { configureable, getIcons } from '@baleada/prepare'

const icons = getIcons({
  set: 'Heroicons',
  dirs: ['solid', 'outline'],
  basePath: 'git_modules/heroicons/optimized',
  toSnakeCased: ({ name, dir }) => `${name}${dir === 'outline' ? '-outline' : ''}`,
})

export default [
  configureable('rollup')
    .delete({ targets: 'lib/*' })
    .input('src/index.js')
    .resolve()
    .external(['vue'])
    .virtual.iconComponentIndex({ icons })
    .virtual.iconComponents({ icons })
    .vue()
    .esm({ file: 'lib/index.js', target: 'browser' })
    // .analyze()
    .configure()
]
