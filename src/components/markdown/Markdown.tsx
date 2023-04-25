import '../../static/styles/markdown-style.css'
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import 'github-markdown-css'

type Props = {
  text: string;
}

const Markdown = (props: Props) => {
  return (
    <div className='reactMarkDown'>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.text}</ReactMarkdown>
    </div>
  )
}

export default Markdown