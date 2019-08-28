
exports.seed = function(knex) {
  
      return knex('sensors').insert([
        {sensorId: 3333, overallStatus: 2, datesArray: ["Mon Mar 20 2019", "Tue Mar 21 2019"], statusesArray: [{"count":288, "total":1244800, "status":2}, {"count":80,"total":111944,"status":2}] },
      ]);
};
