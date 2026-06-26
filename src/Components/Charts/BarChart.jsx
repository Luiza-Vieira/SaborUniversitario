import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts';

export function BarChartComponent({ data, title }) {
  const formatarValor = (value) => {
    return `R$ ${(value / 1000).toFixed(0)}k`;
  };

  return (
    <div className="chart-container">
      <h5 className="chart-title">{title}</h5>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} margin={{ top: 20, right: 30, left: 0, bottom: 20 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ddd" />
          <XAxis dataKey="mes" />
          <YAxis tickFormatter={formatarValor} />
          <Tooltip formatter={(value) => formatarValor(value)} />
          <Legend />
          <Bar dataKey="vendas" fill="#45B7D1" name="Vendas" />
          <Bar dataKey="custos" fill="#FF6B6B" name="Custos" />
          <Bar dataKey="lucro" fill="#4ECDC4" name="Lucro" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
