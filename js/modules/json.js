const getJSON = (src) => import(src, {
    assert: {
        type: "json"
    }
})

export {getJSON}