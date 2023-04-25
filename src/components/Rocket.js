export default function Rocket(props) {
  const component = document.createElement('div');

  const innerHtml = `
  <h2>${props.name}</h2>
  <h3>${props.active ? '✅ In active service' : '❌ Inactive'}</h3>
  <div>
    <table>
      <tr>
        <td>Cost per launch</td>
        <td>$${props.costPerLaunch}</td>
      </tr>
      <tr>
        <td>First flight</td>
        <td>${props.firstFlight}</td>
      </tr>
      <tr>
        <td>Success rate</td>
        <td>${props.successRatePct}%</td>
      </tr>
      <tr>
        <td>Country</td>
        <td>${props.country}</td>
      </tr>
      <tr>
        <td>Mass</td>
        <td>${props.mass.kg}kg</td>
      </tr>
      <tr>
        <td>Height</td>
        <td>${props.height.meters}m</td>
      </tr>
      <tr>
        <td>Engines</td>
        <td>${
          props.engines.number
        } ${props.engines.type[0].toUpperCase()}${props.engines.type.slice(
    1
  )} engine${props.engines.number > 1 ? 's' : ''}</td>
      </tr>
      <tr>
        <td></td>
        <td>${props.country}%</td>
      </tr>
    </table>
  </div>
  `;

  component.innerHTML = innerHtml;

  return component;
}
