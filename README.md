# SalesPredictor-PMN 🚀

**Predictor de Ventas - Maqueta Funcional (PMN)**
*Prototipo de demostración para análisis predictivo de ventas*

🔗 **[Ver despliegue en vivo aquí](https://sales-predictor-86tcd1ndb-sintaxis-projects.vercel.app/)**

---

## 📌 Descripción

SalesPredictor-PMN es una maqueta funcional (PMN) que simula un sistema completo de predicción de ventas, diseñado para demostrar capacidades técnicas y flujos de usuario. Es ideal para:

- Demostraciones técnicas de interfaces analíticas
- Pruebas de concepto de visualización de datos
- Proyectos educativos en desarrollo frontend
- Base para personalizaciones específicas

**Características clave:**
✅ Simulacion de autenticación de usuarios
✅ Simulacion de carga de datos predictivos (CSV/manual)
✅ Gráficos interactivos con análisis temporal
✅ Dashboard con histórico de predicciones

---

## 🗺️ Boceto de Navegación

```mermaid
graph TD
    A[Auth] -->|Login/Register| B{¿Autenticado?}
    B -->|Sí| C[Home]
    B -->|No| A
    C -->|Navbar| D[Data Entry]
    C -->|Navbar| E[Historical Charts]
    C -->|Navbar| F[User Profile]
    D -->|Generar Predicción| G[Output]
    F -->|Logout| A
    G -->|Navbar| C
    E -->|Navbar| C

    style A fill:#4CAF50,stroke:#388E3C
    style C fill:#2196F3,stroke:#1976D2
    style D fill:#FF9800,stroke:#F57C00
    style G fill:#9C27B0,stroke:#7B1FA2
    style E fill:#009688,stroke:#00796B
    style F fill:#E91E63,stroke:#C2185B

---

## 🖼️ Capturas de Pantalla

| ![Home](./assets/screenshots/home.png) | ![Output](./assets/screenshots/output.png) | ![Historical Charts](./assets/screenshots/historicalcharts.png) |
|-----------------------------------------|--------------------------------------------|---------------------------------------------------------------|
| *Vista principal (Home)*                | *Resultados de predicción (Output)*        | *Análisis histórico (Historical Charts)*                      |

---

## 🛠️ Instalación

### Requisitos:
- Node.js v18+
- Yarn
- Nix (opcional)

### Pasos:
```bash
# Con Nix (recomendado):
nix develop
yarn install

# Sin Nix:
yarn install
