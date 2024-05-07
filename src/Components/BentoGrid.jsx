export default function BentoGrid( props ) {
  return (
    <article className='Article' id={props.id}>
      <div className='TextArticle'>
        <h1>{props.Sh}</h1>
        <p>{props.Sp}</p>
      </div>
      <div className='BentoGrid'>
        {props.children}
      </div>
    </article>
  )
}