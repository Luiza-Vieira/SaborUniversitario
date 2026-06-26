import React from 'react';
import './Dashboard.css';
import Header_Empresa from '..//Header_Empresa/Header_Empresa';
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Dashboard() {
  const dataFaturamento = [
    { mes: 'Jan', valor: 100000 },
    { mes: 'Fev', valor: 95000 },
    { mes: 'Mar', valor: 110000 },
    { mes: 'Abr', valor: 105000 },
    { mes: 'Mai', valor: 115000 },
    { mes: 'Jun', valor: 123000 },
  ];

  const dataPizza = [
    { name: 'Vendas', value: 60 },
    { name: 'Devolução', value: 40 },
  ];

  const COLORS = ['#333', '#ccc'];

  return (
    <>
      <Header_Empresa />

      <div className="dashboard-wrapper">
        <div className="dashboard-container">
          
          {/* CARD 1: PIZZA + DADOS */}
          <div className="dashboard-card">
            <div className="card-inner">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={dataPizza}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dataPizza.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p className="card-label">Faturamento total:</p>
              <p className="card-value">R$100.0000</p>
            </div>
          </div>

          {/* CARD 2: BARRAS + DADOS */}
          <div className="dashboard-card">
            <div className="card-inner">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={dataFaturamento} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Bar dataKey="valor" fill="#333" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="card-label">Faturamento total:</p>
              <p className="card-value">R$100.0000</p>
            </div>
          </div>

          {/* CARD 3: PIZZA + DADOS */}
          <div className="dashboard-card">
            <div className="card-inner">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={dataPizza}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dataPizza.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p className="card-label">Faturamento total:</p>
              <p className="card-value">R$100.0000</p>
            </div>
          </div>

          {/* CARD 4: BARRAS + DADOS */}
          <div className="dashboard-card">
            <div className="card-inner">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={dataFaturamento} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Bar dataKey="valor" fill="#333" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="card-label">Faturamento total:</p>
              <p className="card-value">R$100.0000</p>
            </div>
          </div>

          {/* CARD 5: PIZZA + DADOS */}
          <div className="dashboard-card">
            <div className="card-inner">
              <ResponsiveContainer width="100%" height={150}>
                <PieChart>
                  <Pie
                    data={dataPizza}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {dataPizza.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
              <p className="card-label">Faturamento total:</p>
              <p className="card-value">R$100.0000</p>
            </div>
          </div>

          {/* CARD 6: BARRAS + DADOS */}
          <div className="dashboard-card">
            <div className="card-inner">
              <ResponsiveContainer width="100%" height={150}>
                <BarChart data={dataFaturamento} margin={{ top: 0, right: 0, left: 0, bottom: 0 }}>
                  <Bar dataKey="valor" fill="#333" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
              <p className="card-label">Faturamento total:</p>
              <p className="card-value">R$100.0000</p>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default Dashboard;
