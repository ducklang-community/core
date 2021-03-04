
module.exports.output = (context) => console.log(context)

module.exports.form = (context, _, args) => {
    const data = Object.values(args)
    if (!data.length === 1) {
        return context.error.an()
    }
    const arg = data[0]
    if (arg.$tag !== 'text') {
        return context.error.an()
    }
    const string = arg.data.map(String.fromCharCode).join('')
    const output = context.output.$bind(string)
    return context.aggregation.an({ output })
}
