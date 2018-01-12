/*
Params

  agents: object with the available agents
  agent_id : {
    info: {
      id: String,
      rpc_id: String
    },
    metadata: Object,
    stats: {
      perc_cpu: Int
    },
    timeout: Int      // number of periods during the agent has not respond
    rooms: []         // list of the rooms managed by this agent
  }

  roomId: string with the id of the room being managed

Returns

  rpc_id: agent.info.rpc_id field of the selected agent.
    *default value: "ErizoAgent" - select the agent in round-robin mode

*/

exports.getErizoAgent = function (agents, roomId) {
  'use strict';

  let agentId;

  for (let agent in agents) {
    if (agents[agent].rooms.indexOf(roomId) !== -1) {
      agentId = agent;
      break;
    }
  }

  return agentId ? agents[agentId].info.rpc_id : 'ErizoAgent';
};
