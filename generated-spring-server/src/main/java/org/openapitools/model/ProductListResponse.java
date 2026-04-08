package org.openapitools.model;

import java.net.URI;
import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonCreator;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.openapitools.model.ProductPreview;
import org.springframework.lang.Nullable;
import org.openapitools.jackson.nullable.JsonNullable;
import java.time.OffsetDateTime;
import jakarta.validation.Valid;
import jakarta.validation.constraints.*;
import io.swagger.v3.oas.annotations.media.Schema;


import java.util.*;
import jakarta.annotation.Generated;

/**
 * ProductListResponse
 */

@Generated(value = "org.openapitools.codegen.languages.SpringCodegen", date = "2026-04-08T10:47:06.539361157Z[Etc/UTC]", comments = "Generator version: 7.22.0-SNAPSHOT")
public class ProductListResponse {

  @Valid
  private List<@Valid ProductPreview> data = new ArrayList<>();

  private @Nullable Integer total;

  private @Nullable Integer page;

  private @Nullable Integer limit;

  @Valid
  private Map<String, Object> links = new HashMap<>();

  public ProductListResponse data(List<@Valid ProductPreview> data) {
    this.data = data;
    return this;
  }

  public ProductListResponse addDataItem(ProductPreview dataItem) {
    if (this.data == null) {
      this.data = new ArrayList<>();
    }
    this.data.add(dataItem);
    return this;
  }

  /**
   * Get data
   * @return data
   */
  @Valid 
  @Schema(name = "data", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("data")
  public List<@Valid ProductPreview> getData() {
    return data;
  }

  @JsonProperty("data")
  public void setData(List<@Valid ProductPreview> data) {
    this.data = data;
  }

  public ProductListResponse total(@Nullable Integer total) {
    this.total = total;
    return this;
  }

  /**
   * Get total
   * @return total
   */
  
  @Schema(name = "total", example = "2", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("total")
  public @Nullable Integer getTotal() {
    return total;
  }

  @JsonProperty("total")
  public void setTotal(@Nullable Integer total) {
    this.total = total;
  }

  public ProductListResponse page(@Nullable Integer page) {
    this.page = page;
    return this;
  }

  /**
   * Get page
   * @return page
   */
  
  @Schema(name = "page", example = "1", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("page")
  public @Nullable Integer getPage() {
    return page;
  }

  @JsonProperty("page")
  public void setPage(@Nullable Integer page) {
    this.page = page;
  }

  public ProductListResponse limit(@Nullable Integer limit) {
    this.limit = limit;
    return this;
  }

  /**
   * Get limit
   * @return limit
   */
  
  @Schema(name = "limit", example = "10", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("limit")
  public @Nullable Integer getLimit() {
    return limit;
  }

  @JsonProperty("limit")
  public void setLimit(@Nullable Integer limit) {
    this.limit = limit;
  }

  public ProductListResponse links(Map<String, Object> links) {
    this.links = links;
    return this;
  }

  public ProductListResponse putLinksItem(String key, Object linksItem) {
    if (this.links == null) {
      this.links = new HashMap<>();
    }
    this.links.put(key, linksItem);
    return this;
  }

  /**
   * Get links
   * @return links
   */
  
  @Schema(name = "_links", requiredMode = Schema.RequiredMode.NOT_REQUIRED)
  @JsonProperty("_links")
  public Map<String, Object> getLinks() {
    return links;
  }

  @JsonProperty("_links")
  public void setLinks(Map<String, Object> links) {
    this.links = links;
  }

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    ProductListResponse productListResponse = (ProductListResponse) o;
    return Objects.equals(this.data, productListResponse.data) &&
        Objects.equals(this.total, productListResponse.total) &&
        Objects.equals(this.page, productListResponse.page) &&
        Objects.equals(this.limit, productListResponse.limit) &&
        Objects.equals(this.links, productListResponse.links);
  }

  @Override
  public int hashCode() {
    return Objects.hash(data, total, page, limit, links);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class ProductListResponse {\n");
    sb.append("    data: ").append(toIndentedString(data)).append("\n");
    sb.append("    total: ").append(toIndentedString(total)).append("\n");
    sb.append("    page: ").append(toIndentedString(page)).append("\n");
    sb.append("    limit: ").append(toIndentedString(limit)).append("\n");
    sb.append("    links: ").append(toIndentedString(links)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(@Nullable Object o) {
    return o == null ? "null" : o.toString().replace("\n", "\n    ");
  }
}

