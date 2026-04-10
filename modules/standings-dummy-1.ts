import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

export default async function handler(request: ZuploRequest, context: ZuploContext) {
  const dummy = {
    children: [
      {
        name: "American League",
        standings: {
          entries: [
            { team: { shortDisplayName: "Yankees" }, stats: [{ name: "wins", displayValue: "10" }, { name: "losses", displayValue: "3" }, { name: "winPercent", displayValue: ".769" }, { name: "gamesBehind", displayValue: "-" }] },
            { team: { shortDisplayName: "Red Sox" }, stats: [{ name: "wins", displayValue: "7" }, { name: "losses", displayValue: "6" }, { name: "winPercent", displayValue: ".538" }, { name: "gamesBehind", displayValue: "3.0" }] },
            { team: { shortDisplayName: "Blue Jays" }, stats: [{ name: "wins", displayValue: "6" }, { name: "losses", displayValue: "7" }, { name: "winPercent", displayValue: ".462" }, { name: "gamesBehind", displayValue: "4.0" }] }
          ]
        }
      },
      {
        name: "National League",
        standings: {
          entries: [
            { team: { shortDisplayName: "Dodgers" }, stats: [{ name: "wins", displayValue: "11" }, { name: "losses", displayValue: "2" }, { name: "winPercent", displayValue: ".846" }, { name: "gamesBehind", displayValue: "-" }] },
            { team: { shortDisplayName: "Padres" }, stats: [{ name: "wins", displayValue: "8" }, { name: "losses", displayValue: "5" }, { name: "winPercent", displayValue: ".615" }, { name: "gamesBehind", displayValue: "3.0" }] },
            { team: { shortDisplayName: "Giants" }, stats: [{ name: "wins", displayValue: "5" }, { name: "losses", displayValue: "8" }, { name: "winPercent", displayValue: ".385" }, { name: "gamesBehind", displayValue: "6.0" }] }
          ]
        }
      }
    ]
  };

  return new Response(JSON.stringify(dummy), {
    status: 200,
    headers: { "Content-Type": "application/json" }
  });
}