import { useParams } from "react-router"
import TitleBar from "../components/frame/TitleBar"
import style from  "./ui.module.scss"
import { NodeRender } from '@skedo/render'
import usePage from "../hooks/usePage"
import {Page} from "@skedo/meta"
import { ComponentsLoader } from "@skedo/loader"

const Preview = () => {

	const {page : pageName} = useParams<{[key : string] : string}>()
  const pageData = usePage(pageName) 

  if(pageData === null) {
    return null
  }
  const pageObj = new Page(pageName, pageData, ComponentsLoader.get())

  return (
    <div>
      <TitleBar pageName={pageName} name={"preview"} />
      <div className={style['preview-container']}>
        <NodeRender node={pageObj.root} />
      </div>
    </div>
  )
}

export default Preview