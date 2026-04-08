#!/usr/bin/env bash
set -e

cp -n .env.example .env || true
npm install
npm run dev
