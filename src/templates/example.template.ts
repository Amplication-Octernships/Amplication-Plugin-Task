declare const DATA: { data: string };

export class CLASS_NAME {
  constructor(private readonly example: string) {}
  public getExample(): string {
    const text = DATA.data;
    return text;
  }
}
