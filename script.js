            new Chart(document.getElementById("dispersion"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Scatter Dataset",
                            data: [
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7200000 },
                                { name: "BACHILLERATO EN DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 10364360 },
                                { name: "DISEÑO EN LA UNIVERSIDAD AUSTRAL DE CHILE", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD CATÓLICA DE TEMUCO", x: 5, y: 5276000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE CHILE", x: 7, y: 6486700 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LA SERENA", x: 5, y: 4071000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMERICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE PLAYA ANCHA DE CIENCIAS DE LA EDUCACION", x: 5, y: 4305000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE TALCA", x: 6, y: 5887000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VALPARAISO", x: 6, y: 5713000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DE VIÑA DEL MAR", x: 4, y: 4277000 },
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES  EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4030000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7136000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 5069000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7148000 },
                                { name: "DISEÑO DE VIDEOJUEGOS EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN ANIMACIÓN DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN COMUNICACIÓN VISUAL  EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4763300 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 6552000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL  EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE CHILE", x: 7, y: 8080000 },
                                { name: "DISEÑO EN LA PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 7, y: 6915000},
                                { name: "DISEÑO EN LA UNIVERSIDAD DE LAS AMÉRICAS", x: 5, y: 4730000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 9754692 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DEL DESARROLLO", x: 6, y: 6056038 },
                                { name: "DISEÑO EN LA UNIVERSIDAD DIEGO PORTALES", x: 6, y: 7597000 },
                                { name: "DISEÑO EN LA UNIVERSIDAD FINIS TERRAE", x: 5, y: 7320000 },
                                { name: "DISEÑO EN MARKETING DIGITAL EN LA UNIVERSIDAD GABRIELA MISTRAL", x: 4, y: 4814000},
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD ANDRES BELLO", x: 6, y: 7065000 },
                                { name: "DISEÑO GRÁFICO EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4307000 },
                                { name: "DISEÑO GRÁFICO ESPECIALIDAD MULTIMEDIA EN LA UNIACC - UNIVERSIDAD DE ARTES, CIENCIAS Y COMUNICACION", x: 3, y: 4210000},
                                { name: "DISEÑO GRÁFICO MENCIÓN DISEÑO ESTRATÉGICO EN LA UNIVERSIDAD DE ANTOFAGASTA", x: 5, y: 5120000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DE SANTIAGO DE CHILE", x: 7, y: 4989000 },
                                { name: "DISEÑO INDUSTRIAL EN LA UTEM - UNIVERSIDAD TECNOLOGICA METROPOLITANA", x: 4, y: 4891000},
                                { name: "DISEÑO INDUSTRIAL EN LA UNIVERSIDAD DEL BÍO-BÍO", x: 5, y: 4434000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRÁFICO/AMBIENTES EN LA UNIVERSIDAD MAYOR", x: 5, y: 7214218},
                                { name: "DISEÑO MULTIMEDIA EN LA UNIVERSIDAD DE TARAPACA", x: 6, y: 6555000 },
                                { name: "DISEÑO TEATRAL EN LA UNIVERSIDAD DE CHILE", x: 7, y: 5492400 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO EN LA UNIVERSIDAD ADOLFO IBAÑEZ", x: 6, y: 9754692 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN LA UNIVERSIDAD TÉCNICA FEDERICO SANTA MARIA", x: 6, y: 5180000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN LA UNIVERSIDAD BERNARDO O'HIGGINS", x: 5, y: 5900000 },
                            ],
                            backgroundColor: "rgba(241,142,45,.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                        },
                        {
                            label: "Línea de referencia",
                            type: "line",
                            data: [
                                { x: 3, y: 4030000 },
                                { x: 7, y: 8080000 },
                            ],
                            borderColor: "rgba(102,102,102,.2)",
                            borderWidth: 1,
                            pointRadius: 0,
                            pointHoverRadius: 0,
                            fill: false,
                            tension: 0,
                        },
                    ],
                },
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " años" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Universidad acreditada por " + point.x + " años",
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },
                },
            });

            new Chart(document.getElementById("otro"), {
                type: "scatter",
                data: {
                    datasets: [
                        {
                            label: "Scatter Dataset",
                            data: [
                                { name: "DISEÑO DE EXPERIENCIAS INMERSIVAS Y VIDEOJUEGOS EN UNIVERSIDAD GABRIELA MISTRAL", x: 45, y: 4814000 },
                                { name: "DISEÑO DE VIDEOJUEGOS EN UNIVERSIDAD GABRIELA MISTRAL", x: 30, y: 4814000 },
                                { name: "DISEÑO EN ANIMACION DIGITAL EN UNIVERSIDAD GABRIELA MISTRAL", x: 60, y: 4814000 },
                                { name: "DISEÑO EN INTERACCION DIGITAL EN UNIVERSIDAD GABRIELA MISTRAL", x: 20, y: 4814000 },
                                { name: "DISEÑO EN MARKETING DIGITAL EN UNIVERSIDAD GABRIELA MISTRAL", x: 20, y: 4814000 },
                                { name: "INGENIERIA EN REALIDAD VIRTUAL Y DISEÑO DE JUEGOS DIGITALES EN UNIVERSIDAD BERNARDO O'HIGGINS", x: 55, y: 5900000 },
                                { name: "COMUNICACION DIGITAL ESPECIALIDAD DISEÑO Y DESARROLLO DE VIDEOJUEGOS EN UNIACC", x: 50, y: 4580000 },
                                { name: "DISEÑO DE IMAGEN ESPECIALIDAD MODA EN UNIACC", x: 50, y: 4210000 },
                                { name: "DISEÑO DE INTERIORES Y AMBIENTES EN UNIACC", x: 60, y: 4030000 },
                                { name: "DISEÑO GRAFICO ESPECIALIDAD MULTIMEDIA EN UNIACC", x: 50, y: 4210000 },
                                { name: "DISEÑO EN UNIVERSIDAD FINIS TERRAE", x: 80, y: 7320000 },
                                { name: "DISEÑO DE MODA Y MANAGEMENT EN UNIVERSIDAD FINIS TERRAE", x: 35, y: 7320000 },
                                { name: "BACHILLERATO EN ARTES, ARQUITECTURA Y DISEÑO EN UNIVERSIDAD FINIS TERRAE", x: 20, y: 7200000 },
                                { name: "DISEÑO GRAFICO MENCION DISEÑO ESTRATEGICO EN UNIVERSIDAD DE ANTOFAGASTA", x: 35, y: 5120000 },
                                { name: "DISEÑO EN UNIVERSIDAD AUSTRAL DE CHILE", x: 45, y: 5887000 },
                                { name: "DISEÑO EN UNIVERSIDAD DE PLAYA ANCHA", x: 25, y: 4305000 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN USACH", x: 40, y: 6552000 },
                                { name: "DISEÑO INDUSTRIAL EN USACH", x: 50, y: 4989000 },
                                { name: "DISEÑO EN UNIVERSIDAD DE LAS AMERICAS", x: 51, y: 4730000 },
                                { name: "DISEÑO EN UNIVERSIDAD CATOLICA DE TEMUCO", x: 60, y: 5276000 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN UNIVERSIDAD TECNICA FEDERICO SANTA MARIA, SANTIAGO", x: 25, y: 6000000 },
                                { name: "INGENIERIA EN DISEÑO DE PRODUCTOS EN UNIVERSIDAD TECNICA FEDERICO SANTA MARIA, VALPARAÍSO", x: 20, y: 6000000 },
                                { name: "INGENIERIA EN FABRICACION Y DISEÑO INDUSTRIAL EN UTFSM", x: 20, y: 5180000 },
                                { name: "DISEÑO GRAFICO EN UNIVERSIDAD DEL BIO-BIO", x: 45, y: 4307000 },
                                { name: "DISEÑO INDUSTRIAL EN UNIVERSIDAD DEL BIO-BIO", x: 55, y: 4434000 },
                                { name: "DISEÑO EN COMUNICACION VISUAL EN UTEM", x: 60, y: 4763300 },
                                { name: "DISEÑO INDUSTRIAL EN UNIVERSIDAD TECNOLÓGICA METROPOLITANA", x: 40, y: 4891000 },
                                { name: "BACHILLERATO EN DISEÑO EN UNIVERSIDAD DEL DESARROLLO", x: 45, y: 10364360 },
                                { name: "DISEÑO EN UNIVERSIDAD DEL DESARROLLO, SANTIAGO", x: 240, y: 9754692 },
                                { name: "DISEÑO EN UNIVERSIDAD DIEGO PORTALES", x: 165, y: 7597000 },
                                { name: "DISEÑO EN PONTIFICIA UNIVERSIDAD CATÓLICA", x: 178, y: 8080000 },
                                { name: "DISEÑO EN UNIVERSIDAD DE VALPARAISO", x: 75, y: 5713000 },
                                { name: "DISEÑO EN UNIVERSIDAD DEL DESARROLLO, CONCEPCIÓN", x: 70, y: 6056038 },
                                { name: "DISEÑO EN PONTIFICIA UNIVERSIDAD CATÓLICA DE VALPARAÍSO", x: 65, y: 6915000 },
                                { name: "DISEÑO EN UNIVERSIDAD DE CHILE", x: 115, y: 6486700 },
                                { name: "DISEÑO EN UNIVERSIDAD DE TALCA", x: 45, y: 5887000 },
                                { name: "DISEÑO EN UNIVERSIDAD DE LA SERENA", x: 40, y: 4071000 },
                                { name: "DISEÑO EN UNIVERSIDAD DE VIÑA DEL MAR", x: 30, y: 4277000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN UNIVERSIDAD ANDRES BELLO, CONCEPCIÓN", x: 90, y: 5069000 },
                                { name: "DISEÑO DE JUEGOS DIGITALES EN UNIVERSIDAD ANDRES BELLO, SANTIAGO", x: 80, y: 7136000 },
                                { name: "DISEÑO DE VESTUARIO Y TEXTIL EN UNIVERSIDAD ANDRES BELLO", x: 100, y: 7148000 },
                                { name: "DISEÑO GRAFICO EN UNIVERSIDAD ANDRES BELLO", x: 80, y: 7065000 },
                                { name: "DISEÑO MENCION INDUSTRIAL/GRAFICO/AMBIENTES EN UNIVERSIDAD MAYOR", x: 70, y: 7214218 },
                                { name: "DISEÑO MULTIMEDIA EN UNIVERSIDAD DE TARAPACA", x: 58, y: 6555000 },
                                { name: "DISEÑO TEATRAL EN UNIVERSIDAD DE CHILE", x: 25, y: 5492400 }
                            ],
                            backgroundColor: "rgba(229, 41, 41, 0.75)",
                            pointRadius: 5,
                            pointHoverRadius: 5,
                            },
                    ],
                },
                
                options: {
                    scales: {
                        x: {
                            type: "linear",
                            position: "bottom",
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#ccc" },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return Number.isInteger(value) ? value + " vacantes" : null;
                                },
                            },
                        },
                        y: {
                            grid: { color: "rgba(0,0,0,0.06)" },
                            border: { color: "#bbb", dash: [4, 4] },
                            ticks: {
                                font: { family: "'Georama', sans-serif", size: 11 },
                                color: "#999",
                                callback: function (value) {
                                    return "$ " + value.toLocaleString("es-CL");
                                },
                            },
                        },
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            backgroundColor: "#fff",
                            borderColor: "#ddd",
                            borderWidth: 1,
                            titleColor: "#111",
                            bodyColor: "#555",
                            titleFont: { family: "'Georama', sans-serif", size: 12, weight: "600" },
                            bodyFont: { family: "'Georama', sans-serif", size: 11 },
                            padding: 10,
                            filter: function (item) {
                                return item.datasetIndex === 0;
                            },
                            callbacks: {
                                label: function (context) {
                                    const point = context.raw;
                                    return [
                                        point.name,
                                        "Cantidad de vacantes anuales: " + point.x +,
                                        "Arancel $ " + point.y.toLocaleString("es-CL"),
                                    ];
                                },
                            },
                        },
                    },
                },
            });

