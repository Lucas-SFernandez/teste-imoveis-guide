const elm = document.querySelector('.foto-casa')

html2canvas(elm).then(function (canvas) {

    document.querySelector('.resultado').append(canvas)

    var cvs = document.querySelector('canvas')

    var baixar = document.querySelector('#download')

    baixar.button = cvs.toDataURL()
    baixar.download = 'html2canvas.jpeg'
})