const express = require('express');

app = express()
app.use(express.static('./dist'))
app.listen(80, () => {
    console.log('登录成功,在本地运行')
})