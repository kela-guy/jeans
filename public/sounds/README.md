# Typing sounds

**Default:** `key-tap.mp3` (from [kbsim](https://github.com/tplai/kbsim) – MX Blue style).

## kbsim sounds (extracted from [tplai/kbsim](https://github.com/tplai/kbsim))

- **kbsim/mxblue/** – Clicky (press + release)
- **kbsim/mxblack/** – Linear
- **kbsim/topre/** – Topre

Each folder has `press/` (GENERIC_R0–R4, BACKSPACE, ENTER, SPACE) and `release/`. Use any press file as your key-tap, e.g. `/sounds/kbsim/mxblue/press/GENERIC_R0.mp3`.

To use a different sound, set `soundUrl` in `lib/typing-sound-config.ts` (e.g. `/sounds/key-tap.mp3` or `/sounds/kbsim/topre/press/GENERIC_R0.mp3`).
