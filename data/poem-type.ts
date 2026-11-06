export type Poem = {
  title: string;
  author: string;
  /** Year of first publication. Everything here is before 1930. */
  year: number;
  /**
   * The poem as it should print. Leading spaces are indentation and are
   * kept; a blank line is a stanza break; lines longer than the screen wrap
   * with a hanging indent.
   */
  text: string;
};
