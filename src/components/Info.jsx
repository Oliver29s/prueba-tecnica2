import "./style-components/info.css";
const Info = () => {
  return (
    <section className="contain__principal">
        <h1>Otorrinolaringólogo en Monterrey </h1>
      <div className="section__info">
      
        <p>
          El <span> Dr. Jorge Treviño Garza</span> es un{" "}
          <span>Otorrinolaringólogo en Monterrey</span> que cuenta con
          especialidad en Cirugía Plástica Facial, es un médico que
          constantemente se actualiza con el fin de mejorar sus servicios a los
          pacientes.
        </p>
      </div>
      <div className="contain__services">
        <p>
          Servicios del <span>Otorrinolaringólogo en Monterrey:</span>
        </p>
        <ul>
          <li>Consulta</li>
          <li>Radiofrecuencia de Cornetes</li>
          <li>Cirugia endoscópica para sinusitis</li>
          <li>Cirugia de Tabique nasal</li>
          <li>Endoscopia Nasal</li>
          <li>Otorrinolaringología Pediátrica</li>
        </ul>
      </div>
      <h2 className="section__h2">Te mereces un alto nivel de atención por parte de un <span>Otorrinolaringólogo</span> de vanguardia, por lo que el <span>Dr. Jorge Treviño Garza</span> especialista en padecimiento de los oídos.
</h2>
    </section>
  );
};

export default Info;
