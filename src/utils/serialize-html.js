import { map, concat, compose, pipe, joinWith } from 'sanctuary'

const SerializeHTML = (html) => {  
  const parseParagraph = (node) => {
    let text = node.text
    const parsedParagraph = []
    if(node.spans !== null) {
      let newStart = 0
      const reduced = node.spans.reduce((res, span) => {
        let tag, attrs
        if (span.type === 'hyperlink') {
          tag = 'a'
          attrs = ` href=${span.data.url !== null ? '"' + span.data.url + '"' : '"' + '/' + '"'}`
        } else {
          tag = span.type
          attrs = ''        
        } 
        res.push(`${text.slice(0, (span.start - newStart))}`)
        res.push(`<${tag}${attrs}>${text.slice((span.start - newStart), (span.end - newStart))}</${tag}>`)
        text = text.slice(span.end - newStart)
        newStart = span.end
        return res
      }, [])
      reduced.push(text)
      parsedParagraph.push(reduced.join(''))
    } else {
      parsedParagraph.push(text)
    }
    return parsedParagraph.join('')
  }
  const parseNode = node => {
    switch(node.type) {
      case 'paragraph':
        return `<p>${parseParagraph(node)}</p>`
      case 'image':
        return `<img src="${node.url}" width="${node.dimensions.width}" height="${node.dimensions.height}" />`
      default:
        return ''
    }
  }
  return map(compose(joinWith(''), map(parseNode)))(html)
}

export default SerializeHTML