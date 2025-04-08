import * as fs from 'fs'
import * as path from 'path'
import { generateSidebar } from 'vitepress-sidebar'

/**
 * 扫描并返回指定目录下的子文件夹名称
 */
function getSubDirs(parentPath: string): string[] {
  return fs
    .readdirSync(parentPath, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .map(dirent => dirent.name)
}

/**
 * 自动为顶层目录 topLevelDir 下的每个子目录生成 sidebar
 * @param topLevelDir 例如 'develop'，表示 docs/develop
 */
export function autoGenerateMultiSidebar(topLevelDir: string) {
  // 本脚本位于 my-project/scripts/
  // 要访问 docs/ 时，先回退到项目根目录，再进入 docs
  // => path.resolve(__dirname, '../docs')
  // 
  // 如果你的 Node 环境是 ESM(默认 VitePress 2+)，__dirname 需要用下面写法：
  const __dirname = path.dirname(new URL(import.meta.url).pathname)

  // parentPath 就是 docs/develop 的绝对路径
  const parentPath = path.resolve(__dirname, '../', topLevelDir)

  const subDirs = getSubDirs(parentPath) // e.g. ['Golang', '微服务', ...]

  const sidebarObj: Record<string, any> = {}

  for (const subDir of subDirs) {
    // routePrefix：访问 /develop/Golang/ 时使用
    const routePrefix = `/${topLevelDir}/${subDir}/`

    // docPath：告诉 vitepress-sidebar 去扫描 docs/develop/Golang
    // 注意这里写相对路径 => 'docs/develop/Golang'
    // 你可以直接写绝对路径 parentPath + subDir 也行，但 generateSidebar()
    // 通常期待一个相对于根目录 or 运行目录的写法
    const docPath = `docs/${topLevelDir}/${subDir}`

    sidebarObj[routePrefix] = generateSidebar({
      documentRootPath: docPath,
      collapsed: false,
      collapseDepth: 2,
      removePrefixAfterOrdering: false,
      prefixSeparator: '.'
    })
  }

  return sidebarObj
}
