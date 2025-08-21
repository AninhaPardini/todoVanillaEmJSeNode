import fs from 'fs';
import path from 'path';

export default class DB {
  constructor(filename) {
    this.dbPath = path.resolve(`./src/db/${filename}`);
  }

  load() {
    try {
      const data = fs.readFileSync(this.dbPath, 'utf-8');
      return JSON.parse(data);
    } catch (error) {
      return [];
    }
  }

  save(data) {
    fs.writeFileSync(this.dbPath, JSON.stringfy(data, null, 2));
  }
}