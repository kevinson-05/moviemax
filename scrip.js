const canvas = document.getElementById("logoCanvas");
    const ctx = canvas.getContext("2d");

    // Cuerpo de la cámara
    ctx.fillStyle = "#333";
    ctx.fillRect(50, 80, 100, 60); // cuerpo rectangular

    // Lente de la cámara
    ctx.fillStyle = "#fff";
    ctx.beginPath();
    ctx.moveTo(150, 90);
    ctx.lineTo(170, 100);
    ctx.lineTo(170, 120);
    ctx.lineTo(150, 130);
    ctx.closePath();
    ctx.fill();

    // Bobinas de película (círculos)
    ctx.beginPath();
    ctx.arc(65, 70, 20, 0, Math.PI * 2);
    ctx.arc(135, 70, 20, 0, Math.PI * 2);
    ctx.fillStyle = "#f6d7d7bf";
    ctx.fill();

    // Trípode
    ctx.beginPath();
    ctx.moveTo(80, 140);
    ctx.lineTo(60, 180);
    ctx.moveTo(120, 140);
    ctx.lineTo(140, 180);
    ctx.moveTo(100, 140);
    ctx.lineTo(100, 180);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 4;
    ctx.stroke();


