import actix_svg from '$lib/images/tech/actix.png'
import android_svg from '$lib/images/tech/android.svg'
import androidstudio_svg from '$lib/images/tech/androidstudio.svg'
import bun_svg from '$lib/images/tech/bun.svg'
import cef_svg from '$lib/images/tech/cef.svg'
import cloudflare_svg from '$lib/images/tech/cloudflare.svg'
import cpp_svg from '$lib/images/tech/cpp.svg'
import csharp_svg from '$lib/images/tech/csharp.svg'
import css_svg from '$lib/images/tech/css.svg'
import dart_svg from '$lib/images/tech/dart.svg'
import debian_svg from '$lib/images/tech/debian.svg'
import docker_svg from '$lib/images/tech/docker.svg'
import dotpeek_svg from '$lib/images/tech/dotpeek.svg'
import flutter_svg from '$lib/images/tech/flutter.svg'
import git_svg from '$lib/images/tech/git.svg'
// import github_svg from '$lib/images/tech/github-white.svg'
import githubDark_svg from '$lib/images/tech/github.svg'
import go_svg from '$lib/images/tech/go.svg'
import goland_svg from '$lib/images/tech/goland.svg'
import gradle_svg from '$lib/images/tech/gradle.svg'
import grafana_svg from '$lib/images/tech/grafana.svg'
import html_svg from '$lib/images/tech/html5.svg'
import influxdb_svg from '$lib/images/tech/influxdb.svg'
import intellij_svg from '$lib/images/tech/intellij.svg'
import java_svg from '$lib/images/tech/java.svg'
import javascript_svg from '$lib/images/tech/javascript.svg'
import junit_svg from '$lib/images/tech/junit.svg'
import jwt_svg from '$lib/images/tech/jwt.svg'
import kotlin_svg from '$lib/images/tech/kotlin.svg'
import linux_svg from '$lib/images/tech/linux.svg'
import lucia_svg from '$lib/images/tech/lucia.svg'
import lwjgl_svg from '$lib/images/tech/lwjgl.svg'
import mariadb_svg from '$lib/images/tech/mariadb.svg'
import maven_svg from '$lib/images/tech/maven.svg'
import minio_svg from '$lib/images/tech/minio.png'
import mongodb_svg from '$lib/images/tech/mongodb.svg'
import mysql_svg from '$lib/images/tech/mysql.svg'
import nginx_svg from '$lib/images/tech/nginx.svg'
import node_svg from '$lib/images/tech/node.svg'
import npm_svg from '$lib/images/tech/npm.svg'
import opengl_svg from '$lib/images/tech/opengl.svg'
import php_svg from '$lib/images/tech/php.svg'
import pnpm_svg from '$lib/images/tech/pnpm.svg'
import portainer_svg from '$lib/images/tech/portainer.svg'
import postgresql_svg from '$lib/images/tech/postgresql.svg'
import prisma_svg from '$lib/images/tech/prisma.svg'
import putty_svg from '$lib/images/tech/putty.svg'
import python_svg from '$lib/images/tech/python.svg'
import rabbitmq_svg from '$lib/images/tech/rabbitmq.svg'
import redis_svg from '$lib/images/tech/redis.svg'
import renovate_svg from '$lib/images/tech/renovate.svg'
import rider_svg from '$lib/images/tech/rider.svg'
import rust_svg from '$lib/images/tech/rust.svg'
import selenium_svg from '$lib/images/tech/selenium.svg'
import sentry_svg from '$lib/images/tech/sentry.svg'
import spring_svg from '$lib/images/tech/spring.svg'
import svelte_svg from '$lib/images/tech/svelte.svg'
import tailwindcss_svg from '$lib/images/tech/tailwindcss.svg'
import tauri_svg from '$lib/images/tech/tauri.svg'
import telegraf_svg from '$lib/images/tech/telegraf.svg'
import turborepo_svg from '$lib/images/tech/turborepo.svg'
import typescript_svg from '$lib/images/tech/typescript.svg'
import ubuntu_svg from '$lib/images/tech/ubuntu.svg'
import visualstudio_svg from '$lib/images/tech/visualstudio.svg'
import vite_svg from '$lib/images/tech/vite.svg'
import vscode_svg from '$lib/images/tech/vscode.svg'
import vue_svg from '$lib/images/tech/vue.svg'
import terminal_svg from '$lib/images/tech/windows_terminal.svg'

export interface Tech {
    name: string
    icon: string
    category?: string
    class?: string
}

export const actix: Tech = {
    name: 'Actix',
    icon: actix_svg,
    category: 'library'
}

export const android: Tech = {
    name: 'Android',
    icon: android_svg
}

export const androidStudio: Tech = {
    name: 'Android Studio',
    icon: androidstudio_svg,
    category: 'IDE'
}

export const bun: Tech = {
    name: 'Bun',
    icon: bun_svg,
    category: 'JavaScript runtime'
}

export const cef: Tech = {
    name: 'Chromium Embedded Framework',
    icon: cef_svg,
    category: 'framework'
}

export const cloudFlare: Tech = {
    name: 'CloudFlare',
    icon: cloudflare_svg
}

export const cpp: Tech = {
    name: 'C++',
    icon: cpp_svg,
    category: 'language'
}

export const csharp: Tech = {
    name: 'C#',
    icon: csharp_svg,
    category: 'language'
}

export const css: Tech = {
    name: 'CSS',
    icon: css_svg
}

export const dart: Tech = {
    name: 'Dart',
    icon: dart_svg,
    category: 'language'
}

export const debian: Tech = {
    name: 'Debian',
    icon: debian_svg,
    category: 'os'
}

export const docker: Tech = {
    name: 'Docker',
    icon: docker_svg
}

export const dotPeek: Tech = {
    name: 'dotPeek',
    icon: dotpeek_svg,
    category: 'tool'
}

export const flutter: Tech = {
    name: 'Flutter',
    icon: flutter_svg,
    category: 'framework'
}

export const git: Tech = {
    name: 'Git',
    icon: git_svg,
    category: 'version control'
}

export const github: Tech = {
    name: 'GitHub',
    icon: githubDark_svg,
    category: 'version control'
}

export const go: Tech = {
    name: 'Go',
    icon: go_svg,
    category: 'language'
}

export const goLand: Tech = {
    name: 'GoLand',
    icon: goland_svg,
    category: 'IDE'
}

export const gradle: Tech = {
    name: 'Gradle',
    icon: gradle_svg,
    category: 'build system'
}

export const grafana: Tech = {
    name: 'Grafana',
    icon: grafana_svg,
    category: 'observability platform'
}

export const html: Tech = {
    name: 'HTML',
    icon: html_svg
}

export const intellij: Tech = {
    name: 'Intellij IDEA',
    icon: intellij_svg,
    category: 'IDE'
}

export const influxdb: Tech = {
    name: 'InfluxDB',
    icon: influxdb_svg,
    category: 'time series database'
}

export const java: Tech = {
    name: 'Java',
    icon: java_svg,
    category: 'language'
}

export const javaScript: Tech = {
    name: 'JavaScript',
    icon: javascript_svg,
    category: 'language'
}

export const junit: Tech = {
    name: 'JUnit',
    icon: junit_svg,
    category: 'framework'
}

export const jwt: Tech = {
    name: 'JWT',
    icon: jwt_svg,
    category: 'technology'
}

export const kotlin: Tech = {
    name: 'Kotiln',
    icon: kotlin_svg,
    category: 'language'
}

export const linux: Tech = {
    name: 'Linux',
    icon: linux_svg,
    category: 'os'
}

export const lucia: Tech = {
    name: 'Lucia Auth',
    icon: lucia_svg,
    category: 'library'
}

export const lwjgl: Tech = {
    name: 'lwjgl',
    icon: lwjgl_svg,
    category: 'framework'
}

export const mariadb: Tech = {
    name: 'MariaDB',
    icon: mariadb_svg,
    category: 'database'
}

export const maven: Tech = {
    name: 'Maven',
    icon: maven_svg,
    category: 'build system'
}

export const minio: Tech = {
    name: 'MinIO',
    icon: minio_svg,
    class: 'h-14 w-auto',
    category: 'S3 storage'
}

export const mongodb: Tech = {
    name: 'MongoDB',
    icon: mongodb_svg,
    class: 'h-14 w-auto',
    category: 'database'
}

export const mysql: Tech = {
    name: 'MySQL',
    icon: mysql_svg,
    category: 'database'
}

export const nginx: Tech = {
    name: 'Nginx',
    icon: nginx_svg,
    category: 'web server'
}

export const nodejs: Tech = {
    name: 'Node.js',
    icon: node_svg
}

export const npm: Tech = {
    name: 'npm',
    icon: npm_svg,
    category: 'package manager'
}

export const opengl: Tech = {
    name: 'OpenGL',
    icon: opengl_svg,
    category: 'framework'
}

export const php: Tech = {
    name: 'PHP',
    icon: php_svg,
    category: 'language'
}

export const pnpm: Tech = {
    name: 'pnpm',
    icon: pnpm_svg,
    category: 'package manager'
}

export const portainer: Tech = {
    name: 'Portainer',
    icon: portainer_svg,
    class: 'h-14 w-auto'
}

export const postgresql: Tech = {
    name: 'PostgreSQL',
    icon: postgresql_svg,
    category: 'database'
}

export const prisma: Tech = {
    name: 'Prisma',
    icon: prisma_svg,
    category: 'framework'
}

export const putty: Tech = {
    name: 'PuTTY',
    icon: putty_svg,
    category: 'tool'
}

export const python: Tech = {
    name: 'Python',
    icon: python_svg,
    category: 'language'
}

export const rabbitmq: Tech = {
    name: 'RabbitMQ',
    icon: rabbitmq_svg
}

export const redis: Tech = {
    name: 'Redis',
    icon: redis_svg
}

export const renovate: Tech = {
    name: 'Renovate',
    icon: renovate_svg,
    category: 'Dependency manager',
    class: 'object-cover h-14'
}

export const rider: Tech = {
    name: 'Rider',
    icon: rider_svg,
    category: 'IDE'
}

export const rust: Tech = {
    name: 'Rust',
    icon: rust_svg,
    category: 'language'
}

export const selenium: Tech = {
    name: 'Selenium',
    icon: selenium_svg,
    category: 'framework'
}

export const sentry: Tech = {
    name: 'Sentry',
    icon: sentry_svg,
    category: 'analytics'
}

export const spring: Tech = {
    name: 'Spring',
    icon: spring_svg,
    category: 'framework'
}

export const svelte: Tech = {
    name: 'Svelte',
    icon: svelte_svg,
    category: 'framework'
}

export const tailwind: Tech = {
    name: 'Tailwind CSS',
    icon: tailwindcss_svg,
    category: 'library'
}

export const tauri: Tech = {
    name: 'Tauri',
    icon: tauri_svg,
    category: 'framework'
}

export const telegraf: Tech = {
    name: 'Telegraf',
    icon: telegraf_svg,
    category: 'metrics collection agent'
}

export const turborepo: Tech = {
    name: 'Turborepo',
    icon: turborepo_svg,
    category: 'monorepo management'
}

export const typescript: Tech = {
    name: 'TypeScript',
    icon: typescript_svg,
    category: 'language'
}

export const ubuntu: Tech = {
    name: 'Ubuntu',
    icon: ubuntu_svg,
    category: 'os'
}

export const vs: Tech = {
    name: 'Visual Studio',
    icon: visualstudio_svg,
    category: 'IDE'
}

export const vite: Tech = {
    name: 'Vite',
    icon: vite_svg,
    category: 'build system'
}

export const vscode: Tech = {
    name: 'Visual Studio Code',
    icon: vscode_svg,
    category: 'IDE'
}

export const vue: Tech = {
    name: 'Vue.js',
    icon: vue_svg,
    category: 'framework'
}

export const terminal: Tech = {
    name: 'Windows Terminal',
    icon: terminal_svg,
    category: 'tool'
}

export const tech: Tech[] = [
    actix,
    android,
    androidStudio,
    bun,
    cef,
    cloudFlare,
    cpp,
    csharp,
    css,
    dart,
    debian,
    docker,
    dotPeek,
    flutter,
    git,
    github,
    go,
    goLand,
    gradle,
    grafana,
    html,
    intellij,
    influxdb,
    java,
    javaScript,
    junit,
    jwt,
    kotlin,
    linux,
    lucia,
    lwjgl,
    mariadb,
    maven,
    minio,
    mongodb,
    mysql,
    nginx,
    nodejs,
    npm,
    opengl,
    php,
    pnpm,
    postgresql,
    portainer,
    prisma,
    putty,
    python,
    rabbitmq,
    redis,
    renovate,
    rider,
    rust,
    selenium,
    sentry,
    spring,
    svelte,
    tailwind,
    tauri,
    telegraf,
    turborepo,
    typescript,
    ubuntu,
    vs,
    vite,
    vscode,
    vue,
    terminal
]
