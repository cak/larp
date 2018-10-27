import fetch from "node-fetch";
import { readFile } from "fs";

interface config {
  url?: boolean;
  file?: boolean;
}

export async function ipv4(
  arg: string,
  options?: config
): Promise<RegExpMatchArray> {
  const ipRegex: RegExp = /\b((25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/gi;
  return regexParse(arg, ipRegex, options); //?
}

export async function email(
  arg: string,
  options?: config
): Promise<RegExpMatchArray> {
  const emailRegex: RegExp = /\b([^.\s][a-z0-9.+-]+@[a-z0-9.-]+\.[a-z-]{2,24})\b/g;
  return regexParse(arg, emailRegex, options);
}

export async function url(
  arg: string,
  options?: config
): Promise<RegExpMatchArray> {
  const urlRegex = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?«»“”‘’]))\b/gi;
  return regexParse(arg, urlRegex, options);
}

export async function src(
  arg: string,
  options?: config
): Promise<RegExpMatchArray> {
  const srcRegex = /(?<=\ssrc=(?:"|'))([a-z0-9$\-_+!*'(),,.;\/?:@=&%]+)(?=(?:'|")(?:>|\s))/gi;
  return regexParse(arg, srcRegex, options);
}

export async function href(
  arg: string,
  options?: config
): Promise<RegExpMatchArray> {
  const hrefRegex = /(?<=\shref=(?:"|'))([a-z0-9$\-_+!*'(),,.;\/?:@=&%]+)(?=(?:'|")(?:>|\s))/gi;
  return regexParse(arg, hrefRegex, options);
}

async function regexParse(
  arg: string,
  regexPattern: RegExp,
  options?: config
): Promise<RegExpMatchArray> {
  if (options) {
    if (options.url) {
      arg = await urlData(arg);
    } else if (options.file) {
      arg = await fileData(arg);
    }
  }

  const match: Promise<RegExpMatchArray> = new Promise<RegExpMatchArray>(
    resolve => resolve(arg.match(regexPattern) || undefined)
  );
  return match;
}

async function urlData(url: string): Promise<string> {
  let res = await fetch(url);
  return await res.text();
}

async function fileData(arg: string): Promise<string> {
  let fileRead: Promise<string> = new Promise<string>((resolve, reject) => {
    readFile(arg, "utf8", (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
  return fileRead;
}
