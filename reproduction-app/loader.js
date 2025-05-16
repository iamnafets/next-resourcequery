function loader(source) {
    return `export default ${JSON.stringify(source)}`;
}

module.exports = loader;