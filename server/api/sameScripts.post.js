export default defineEventHandler((event) => {
    const query = getQuery(event)
    const sourceText = query.sourceText
    
    return sourceText
})