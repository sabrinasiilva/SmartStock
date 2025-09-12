 document.getElementById('sidebarToggle').addEventListener('click', function() {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.toggle('sidebar-collapsed');
            document.querySelector('.content-expanded').classList.toggle('ml-64');
            document.querySelector('.content-expanded').classList.toggle('ml-16');
        });

        // Demand Chart
        const ctx = document.getElementById('demandChart').getContext('2d');
        const demandChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: Array.from({length: 30}, (_, i) => `${i+1}/06`),
                datasets: [{
                    label: 'Demanda Prevista',
                    data: [20, 22, 25, 28, 30, 32, 35, 38, 42, 45, 50, 55, 60, 65, 70, 75, 80,           85, 90, 95, 100, 105, 110, 115, 120, 125, 130, 135, 140, 145],
                    borderColor: 'rgb(59, 130, 246)',
                    backgroundColor: 'rgba(59, 130, 246, 0.1)',
                    tension: 0.3,
                    fill: true
                }, {
                    label: 'Estoque Atual',
                    data: [150, 148, 145, 142, 140, 137, 134, 130, 126, 122, 118, 113, 108, 102, 96, 90, 83, 75, 67, 58, 48, 38, 27, 15, 2, 0, 0, 0, 0, 0],
                    borderColor: 'rgb(239, 68, 68)',
                    backgroundColor: 'rgba(239, 68, 68, 0.1)',
                    tension: 0.3,
                    fill: true
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        position: 'top',
                    },
                    tooltip: {
                        mode: 'index',
                        intersect: false,
                    },
                    annotation: {
                        annotations: [{
                            type: 'line',
                            mode: 'horizontal',
                            scaleID: 'y',
                            value: 10,
                            borderColor: 'red',
                            borderWidth: 2,
                            borderDash: [6, 6],
                            label: {
                                content: 'Limite de Ruptura',
                                enabled: true,
                                position: 'left'
                            }
                        }]
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Quantidade'
                        }
                    },
                    x: {
                        title: {
                            display: true,
                            text: 'Próximos 30 Dias'
                        }
                    }
                }
            }
        });

        // Simular dados para a previsão de ruptura
        function simulateStock(days, initialStock, dailyDemand) {
            return initialStock - (dailyDemand * days);
        }