function parse(data) {
    const newData = data.replace(/(\n|<b>|<\/b>)/g, '')
    var regex = /<tr bgcolor="#[0-9a-fA-F]{6}">(.*?)<\/tr>/g;
    const result = newData.match(regex).map(function(td) {
        const rows = td.match(/<td align="center">(.*?)<\/td>/g);
        return {
            name: rows[1].match(/title="(.*)">(.*)<\/a>/)[2],
            country: rows[2].match(/title="(.*)"/)[1],
            population: rows[3].match(/>(.*?)</)[1].replace(/,/g, ''),
            url: `https://en.wikipedia.org${rows[1].match(/a href="(.*?)" /)[1]}`,
        }
    });
    return result;
}

module.exports = {
    parse
}
