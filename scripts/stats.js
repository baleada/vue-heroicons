const { readdirSync } = require('fs'),
      { execSync } = require('child_process'),
      { resolve, parse } = require('path')

function stats () {
  const components = readdirSync('src').filter(path => parse(path).ext === '.vue'),
        outlineComponents = components.filter(path => parse(path).name.endsWith('Outline')),
        solidComponents = components.filter(path => !parse(path).name.endsWith('Outline'))

  console.log(`${solidComponents.length} solid components`)
  console.log(`${outlineComponents.length} outline components`)
  console.log(`${components.length} total components`)

  console.log('---')

  const outlineIcons = readdirSync('git_modules/heroicons/outline'),
        solidIcons = readdirSync('git_modules/heroicons/solid')

  console.log(`${solidIcons.length} solid icons`)
  console.log(`${outlineIcons.length} outline icons`)
  console.log(`${solidIcons.length + outlineIcons.length} total icons`)

  console.log('---')

  const lastSourcePublishDate = new Date(execSync('git log -1 --format=%cd', { cwd: `${resolve('')}/git_modules/heroicons` }, (err, stdout, stderr) => {
    if (err) {
      // node couldn't execute the command
      return
    }

    return stdout.toString()
  }))


  const packageInfo = execSync('npm view -json', { cwd: `${resolve('')}/git_modules/heroicons` }, (err, stdout, stderr) => {
          if (err) {
            // node couldn't execute the command
            return
          }

          return stdout.toString()
        }),
        lastPackagePublishDate = new Date(JSON.parse(packageInfo).time.modified)

  console.log(`Src published: ${lastSourcePublishDate.toLocaleString('en-US')}`)
  console.log(`Pkg published: ${lastPackagePublishDate.toLocaleString('en-US')}`)
}


stats()
