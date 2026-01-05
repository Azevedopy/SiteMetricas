        // Animação de entrada suave
        document.addEventListener('DOMContentLoaded', function() {
            // Observador para animações de entrada
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('fade-in');
                    }
                });
            }, observerOptions);
            
            // Observar todos os elementos com classe de animação
            document.querySelectorAll('.section-title, .company-card, .value-card, .metric-item, .resource-card, .performance-card, .hero-content').forEach(el => {
                observer.observe(el);
            });
            
            // Header scroll effect
            window.addEventListener('scroll', function() {
                const header = document.querySelector('header');
                if (window.scrollY > 50) {
                    header.style.boxShadow = '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                } else {
                    header.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)';
                }
            });
            
            // Navegação suave
            document.querySelectorAll('nav a, .internal-button').forEach(anchor => {
                anchor.addEventListener('click', function(e) {
                    const href = this.getAttribute('href');
                    
                    if (href.startsWith('#')) {
                        e.preventDefault();
                        
                        const targetId = href.substring(1);
                        const targetElement = document.getElementById(targetId);
                        
                        if (targetElement) {
                            window.scrollTo({
                                top: targetElement.offsetTop - 80,
                                behavior: 'smooth'
                            });
                        }
                    }
                });
            });
            
            // Simular dados atualizados em tempo real
            function updateLiveMetrics() {
                const metrics = document.querySelectorAll('.stat-value');
                if (metrics.length > 0) {
                    // Simular pequenas variações nos números
                    const variations = [0.1, -0.1, 0.2, -0.2];
                    metrics.forEach((metric, index) => {
                        const currentValue = parseFloat(metric.textContent);
                        if (!isNaN(currentValue)) {
                            const variation = variations[index % variations.length];
                            const newValue = currentValue + variation;
                            // Formatar corretamente baseado no tipo de métrica
                            if (metric.textContent.includes('%')) {
                                metric.textContent = newValue.toFixed(1) + '%';
                            } else if (metric.textContent.includes('min')) {
                                metric.textContent = Math.max(28, Math.round(newValue)) + 'min';
                            } else {
                                metric.textContent = newValue.toFixed(1);
                            }
                        }
                    });
                }
            }
            
            // Atualizar métricas a cada 30 segundos (simulação)
            setInterval(updateLiveMetrics, 30000);
        });
