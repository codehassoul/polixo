export function createEngine({ rules = [] } = {}) {
  if (!Array.isArray(rules)) {
    throw new TypeError('polixo: rules must be an array')
  }

  return {
    evaluate(ctx = {}) {
      for (const rule of rules) {
        if (typeof rule.when !== 'function') continue

        if (rule.when(ctx)) {
          return {
            effect: rule.effect,
            reason: rule.reason ?? null
          }
        }
      }

      return {
        effect: 'NEUTRAL',
        reason: null
      }
    }
  }
}