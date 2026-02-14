/*
╔══════════════════════════════════════════════════════╗
║  ⚠  WARNING: DEVELOPER WAS HERE                      ║
╠══════════════════════════════════════════════════════╣
║  Project   : EduAI Marketplace                       ║
║  File      : +native-intent.tsx                      ║
║  Author    : Caner Taha Yilmaz                       ║
║  Since     : 14 Feb 2026                             ║
║                                                      ║
║  Responsibility:                                     ║
║  → Native intent routing: decides entry path.        ║
║                                                      ║
║  Known Facts:                                        ║
║  • Small file, big consequences.                     ║
║  • If this misroutes, chaos begins.                  ║
║                                                      ║
║  If the app opens somewhere weird…                   ║
║  this file probably did it.                          ║
╚══════════════════════════════════════════════════════╝
*/
export function redirectSystemPath() {
    return '/(tabs)/(home)';
}
