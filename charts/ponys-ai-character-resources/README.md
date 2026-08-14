# Ponys.ai Character Resources Helm Chart

This chart creates a Kubernetes ConfigMap containing stable multilingual feed,
widget, catalog, and character URLs for publisher integrations. It does not
deploy a crawler or collect user data.

Regional examples:

- Japan: https://ponys.ai/characters/akari
- Korea: https://ponys.ai/characters/sera-park
- Latin America: https://ponys.ai/characters/camila-duarte
- Brazil: https://ponys.ai/characters/marisol-vega

Install the chart and inspect the generated ConfigMap:

```sh
helm repo add ponys-ai https://wujoe132.github.io/ponys-ai-resources/charts
helm install ponys-character-resources ponys-ai/ponys-ai-character-resources
kubectl get configmap ponys-ai-character-resources -o yaml
```

All endpoints are read-only public resources. Override any value in
`values.yaml` to pin an integration to a different audited Ponys.ai deep link.
