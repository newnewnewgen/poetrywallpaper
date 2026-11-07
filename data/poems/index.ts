/**
 * The whole list, one batch after another.
 *
 * Batches are files, numbered so the order is fixed, because the order is
 * what the year's shuffle is seeded over: reorder or renumber these and
 * every day of the year gets a different poem. Add a new batch at the end.
 *
 * Everything here is carpe diem in the broad sense: time passing, the
 * present moment, mortality as a spur, making the most of a life. Poems
 * that were in the list but are about other things sit in data/archive,
 * imported nowhere.
 */
import type { Poem } from "@/data/poem-type";
import { batch as b00 } from "./00-first-forty-eight";
import { batch as b01 } from "./01-renaissance";
import { batch as b02 } from "./02-romantics";
import { batch as b03 } from "./03-victorians";
import { batch as b04 } from "./04-dickinson";
import { batch as b05 } from "./05-americans";
import { batch as b06 } from "./06-housman-frost";
import { batch as b07 } from "./07-more-early";
import { batch as b08 } from "./08-poetrydb";
import { batch as b09 } from "./09-gutenberg";
import { batch as b10 } from "./10-more-gutenberg";

export type { Poem };

export const poems: Poem[] = [...b00, ...b01, ...b02, ...b03, ...b04, ...b05, ...b06, ...b07, ...b08, ...b09, ...b10];
