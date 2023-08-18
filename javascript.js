{/* <script> */}
    
    function thetime() {
        const T = new Date()

        const time = `${T.getHours().toString().padStart(2, '0')}:${T.getMinutes().toString().padStart(2, '0')}:${T.getSeconds().toString().padStart(2, '0')}`
        document.getElementById("time").innerHTML = time;
    }
    thetime()
    setInterval(thetime, 1000)
    
{/* </script> */}