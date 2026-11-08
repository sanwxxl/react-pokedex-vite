import grass from "../img/icons/grass.svg";
import bug from "../img/icons/bug.svg";
import dark from "../img/icons/dark.svg";
import dragon from "../img/icons/dragon.svg";
import electric from "../img/icons/electric.svg";
import fairy from "../img/icons/fairy.svg";
import fighting from "../img/icons/fighting.svg";
import fire from "../img/icons/fire.svg";
import flying from "../img/icons/flying.svg";
import ghost from "../img/icons/ghost.svg";
import ground from "../img/icons/ground.svg";
import ice from "../img/icons/ice.svg";
import normal from "../img/icons/normal.svg";
import poison from "../img/icons/poison.svg";
import psychic from "../img/icons/psychic.svg";
import rock from "../img/icons/rock.svg";
import steel from "../img/icons/steel.svg";
import water from "../img/icons/water.svg";
import { Tooltip } from "antd";

const badge = {
  container: {
    display: "flex",
    color: "white",
    borderRadius: "8px",
    marginBottom: "1em",
  },
  value: {
    padding: "8px",
    borderRadius: "0px 8px 8px 0px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
  },
  label: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: "8px 0 0 8px",

    padding: "8px",
  },
};

function Component3({ pokeType, pokeStats, pokeAbilities }) {
  return (
    <div>
      <ul style={{ display: "flex" }}>
        {pokeType.map((type, index) => (
          <Tooltip key={index} placement="topLeft" title={type.type}>
            <img
              key={index}
              src={
                type.type === "grass"
                  ? grass
                  : type.type === "fire"
                  ? fire
                  : type.type === "bug"
                  ? bug
                  : type.type === "dark"
                  ? dark
                  : type.type === "dragon"
                  ? dragon
                  : type.type === "electric"
                  ? electric
                  : type.type === "electric"
                  ? electric
                  : type.type === "fairy"
                  ? fairy
                  : type.type === "fighting"
                  ? fighting
                  : type.type === "flying"
                  ? flying
                  : type.type === "ghost"
                  ? ghost
                  : type.type === "ground"
                  ? ground
                  : type.type === "ice"
                  ? ice
                  : type.type === "poison"
                  ? poison
                  : type.type === "psychic"
                  ? psychic
                  : type.type === "rock"
                  ? rock
                  : type.type === "steel"
                  ? steel
                  : type.type === "water"
                  ? water
                  : normal
              }
              alt="type"
              style={{
                height: "60px",
                width: "60px",
                borderRadius: "50px",
                backgroundColor: "rgba(0,0,0, 0.6)",
                margin: "0 1rem",
                padding: "1em",
              }}
              title={type.type}
            />
          </Tooltip>
        ))}
      </ul>
      <h1>능력치:</h1>
      <div style={{ borderLeft: "solid", marginLeft: "1em" }}>
        <div style={{ marginLeft: "2em" }}>
          <div style={{ display: "flex" }}>
            <div style={badge.container}>
              <div style={badge.label}>체력:</div>
              <div style={badge.value}>
                {pokeStats[0] && pokeStats[0].base_stat}
              </div>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <div style={badge.container}>
                <div style={badge.label}>공격력:</div>
                <div style={badge.value}>
                  {pokeStats[1] && pokeStats[1].base_stat}
                </div>
              </div>
            </div>
          </div>

          <div style={badge.container}>
            <div style={badge.label}>방어력:</div>
            <div style={badge.value}>
              {pokeStats[2] && pokeStats[2].base_stat}
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={badge.container}>
              <div style={badge.label}>특수공격:</div>
              <div style={badge.value}>
                {pokeStats[3] && pokeStats[3].base_stat}
              </div>
            </div>
            <div style={{ marginLeft: "1em" }}>
              <div style={badge.container}>
                <div style={badge.label}>특수방어:</div>
                <div style={badge.value}>
                  {pokeStats[4] && pokeStats[4].base_stat}
                </div>
              </div>
            </div>
          </div>

          <div style={badge.container}>
            <div style={badge.label}>속도:</div>
            <div style={badge.value}>
              {pokeStats[5] && pokeStats[5].base_stat}
            </div>
          </div>
        </div>
      </div>
      <div style={{ borderTop: "solid", width: '30em' }}>
        <h1>특성:</h1>

        <div style={{ display: "flex", marginTop: "1em" }}>
          <div style={badge.container}>
            <div style={badge.label}>특성 1:</div>
            <div style={badge.value}>
              {pokeAbilities[0] && pokeAbilities[0].abilities}
            </div>
          </div>
          {pokeAbilities[1] && (
            <div style={{ marginLeft: "1em" }}>
              <div style={badge.container}>
                <div style={badge.label}>특성 2:</div>
                <div style={badge.value}>{pokeAbilities[1].abilities}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Component3;
