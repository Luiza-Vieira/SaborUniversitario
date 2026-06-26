function Sidebar({
  sidebarAberta,
  sidebarRef,
  navigate,
  setSidebarAberta
}) {
  const menuItems = [
    { label: "Dashboard", path: "/dashboard" },
    { label: "Funcionários", path: "/funcionarios" },
    { label: "Produtos", path: "/produtos" },
    { label: "Categorias", path: "/categorias" },
    { label: "Formas de Pagamento", path: "/formas-pagamento" },
    { label: "Formas de Recebimento", path: "/formas-recebimento" },
    { label: "Benefícios", path: "/beneficios" },
  ];

  if (!sidebarAberta) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        onClick={() => setSidebarAberta(false)}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1040,
        }}
      />

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "180px",
          height: "100vh",
          backgroundColor: "#2a2a2a",
          zIndex: 1050,
          paddingTop: "15px",
        }}
      >
        {/* Avatar */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <div
            style={{
              width: "60px",
              height: "60px",
              borderRadius: "50%",
              margin: "0 auto 8px",
              overflow: "hidden",
              backgroundColor: "#3a3a3a",
            }}
          >
            <img
              src="/logo.png"
              alt="Logo"
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
              onError={(e) => {
                e.target.src = "";
                e.target.style.display = "none";
              }}
            />
          </div>
          <span style={{ color: "#888", fontSize: "11px" }}>empresa</span>
        </div>

        {/* Menu */}
        <nav>
          {menuItems.map((item) => (
            <div
              key={item.path}
              onClick={() => {
                navigate(item.path);
                setSidebarAberta(false);
              }}
              style={{
                padding: "10px 0",
                textAlign: "center",
                color: "#ccc",
                fontSize: "13px",
                cursor: "pointer",
                borderBottom: "1px solid #3a3a3a",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#333";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
              }}
            >
              {item.label}
            </div>
          ))}
        </nav>
      </div>
    </>
  );
}

export default Sidebar;
