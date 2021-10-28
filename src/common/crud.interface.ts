export interface CRUD {
  list: (limit: number, page: number) => Promise<any>;
  create: (resource: any) => Promise<any>;
  putById: (id: any, resource: any) => Promise<any>;
  readById: (id: any) => Promise<any>;
  deleteById: (id: any) => Promise<any>;
}
